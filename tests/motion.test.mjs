import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

test('reduced motion keeps evidence counts readable and skips reveal/counter animation', () => {
  const counts = [10,25].map(n => ({dataset:{count:String(n)},textContent:String(n)}));
  const document = {
    body:{classList:{toggle(){}}},
    documentElement:{scrollHeight:2000},
    querySelector(){return null;},
    getElementById(){return null;},
    querySelectorAll(selector){return selector === '[data-count]' ? counts : [];},
    addEventListener(){},
  };
  const forbidden = () => {throw new Error('Animation scheduled despite reduced motion');};
  runInNewContext(readFileSync(new URL('../assets/js/site.js',import.meta.url),'utf8'), {
    document,
    window:{IntersectionObserver:forbidden},
    IntersectionObserver:forbidden,
    matchMedia:query => ({matches:query.includes('prefers-reduced-motion'),addEventListener(){}}),
    addEventListener(){},
    requestAnimationFrame:forbidden,
    cancelAnimationFrame(){},
    innerHeight:800,
    scrollY:0,
  });
  assert.deepEqual(counts.map(el=>el.textContent),['10','25']);
});
