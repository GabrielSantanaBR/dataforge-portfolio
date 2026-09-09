# Validação da reformulação MATRIZ

Rodada de 08–09/09/2026. A publicação parte do repositório existente; nenhuma aplicação de terceiros ou base de dados foi alterada.

## Integridade e conteúdo

- 21 páginas HTML, 18 URLs indexáveis, 25 itens no repertório e 10 projetos destacados.
- 26 repositórios públicos identificados; perfil excluído; dois forks e um repositório vazio sinalizados.
- 64 caminhos de evidência conferidos nos checkouts e branches indicados. Movimento foi inspecionado em `feat/mvp`.
- Auditoria de links locais e fragmentos, IDs, headings, landmarks, atributos de acessibilidade, metadados, sitemap e robots.
- URLs antigas e oito rotas `project.html?id=...` preservadas. Assets da 404 usam o prefixo real do GitHub Pages para funcionar em caminhos profundos.
- CSP restritiva, atributos seguros, limites do contato, fontes locais e padrões comuns de credenciais auditados.
- Os 114 paths da logo e sua pintura correspondem ao hash do SVG original. Ícones PNG e social preview têm as dimensões esperadas.

## Layout no Chromium

O painel de QA utiliza iframes com dimensões CSS exatas. A barra vertical ocupou 15 px; `scrollWidth` e `clientWidth` coincidiram em todas as 34 medições registradas em `browser-checks.json`.

| Viewport | Home | Projeto | Contato |
| --- | --- | --- | --- |
| 360×800 | Sem overflow | Sem overflow | Sem overflow |
| 375×812 | Sem overflow | Sem overflow | Sem overflow |
| 390×844 | Sem overflow | Sem overflow | Sem overflow |
| 430×932 | Sem overflow | Sem overflow | Sem overflow |
| 768×1024 | Sem overflow | Sem overflow | Sem overflow |
| 1366×768 | Sem overflow | Sem overflow | Sem overflow |
| 1440×900 | Sem overflow | Sem overflow | Sem overflow |
| 1920×1080 | Sem overflow | Sem overflow | Sem overflow |

Serviços, privacidade e a página 404 foram medidos em 360×800, 430×932 e 1440×900. A home também foi medida em 1024×768 para verificar o header e seu CTA. Fontes carregadas; nenhuma imagem carregada estava quebrada. A captura do Coffee Five utiliza lazy loading e foi conferida ao entrar na área visível.

O endereço deliberadamente inexistente foi bloqueado pelo navegador de QA, antes de permitir a inspeção de seu documento. O layout da 404 foi validado pela rota explícita e seus caminhos profundos pela auditoria de arquivos. A condição HTTP final depende da hospedagem.

## Interações

- Menu mobile: abrir, fechar, Escape, retorno de foco e ciclo com Shift+Tab.
- Link de repertório fecha o menu; filtro Dados mostra um resultado; Todos recupera os 25.
- CTA de projeto abre contato com categoria e contexto preenchidos.
- Validação de telefone e correção por teclado, preservando o restante do formulário.
- Respostas simuladas de erro, limite do provedor, bloqueio de repetição e sucesso com navegação para a confirmação.
- Sete testes Node: seis contratos do contato e um de reduced motion. Timeout e respostas inválidas são cobertos por transporte simulado.
- A preferência de movimento reduzido mantém contadores legíveis e evita agendar reveal/counter; a regra CSS desativa animações e transições. Não houve emulação de preferência do sistema operacional no navegador disponível.

## Formulário e achados corrigidos

A primeira tentativa com dados fictícios utilizou o POST nativo e foi aceita pelo Web3Forms. Esse teste não confirma recebimento na caixa de email. O carregamento do módulo de contato não se completou no ambiente de QA; o contato passou a usar um único script local gerado, sem dependências, cuja inicialização e tratamento de erro foram verificados.

Os cenários seguintes foram isolados: identificador fictício, `connect-src 'none'`, `form-action 'none'` e transporte simulado. Uma falha do mock não permite enviar mensagens externas. Esses controles de teste não entram no site publicado.

O ClientFlow externo apresentou erro de inicialização em uma sessão sem dados salvos (`clone` utilizado antes da declaração). O case foi corrigido para **Protótipo frontend**, com limitação explícita, e não anuncia demonstração funcionando. O repositório do ClientFlow não foi modificado.

## Revisão visual e contraste

Capturas em `qa/`: hero desktop 1440×900, mobile 360×800, menu mobile e página de projeto. Revisados alinhamento, hierarquia, proporção da logo, legibilidade, espaços, foco e navegação. A tipografia não recebe blur; a energia da marca fica concentrada na chama e nos destaques.

| Texto / superfície | Contraste calculado |
| --- | --- |
| Forge White / Carbon Black | 17,42:1 |
| Steel / Graphite | 5,85:1 |
| Texto secundário / Graphite | 8,31:1 |
| Texto da seção clara / Forge White | 6,34:1 |
| Carbon Black / Hot Ember | 8,41:1 |
| Label da faixa de contato / Hot Ember | 5,12:1 |
| Borda dos campos / Graphite | 3,53:1 |

Esses valores cobrem pares principais de cores, não constituem certificação de acessibilidade. A rodada usa Chromium e viewports CSS; aparelhos físicos, Safari e leitores de tela não foram testados. Mensagens da extensão interna do navegador não são erros dos scripts da MATRIZ.

## Gate de publicação

`tests/audit.py` e os testes Node devem passar antes da publicação. `scripts/build.py` gera `dist/`; `tests/audit.py --dist` inspeciona a saída efetivamente enviada. O workflow repete esses gates antes do deploy da `main`. A versão anterior está em `backup/pre-matriz-2026-09-07`.
