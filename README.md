# MATRIZ

**Tecnologia que transforma negócios em possibilidades.**

Sistemas · Automação · Dados · Inteligência.

Site institucional da MATRIZ, com soluções, projetos, repertório público e contato. A tecnologia parte do problema da operação: conectar processos, organizar dados e construir produtos utilizáveis.

**Site:** https://gabrielsantanabr.github.io/dataforge-portfolio/

`dataforge-portfolio` é o nome legado do repositório. A marca pública é **MATRIZ**; o nome do repositório e o endereço do GitHub Pages foram preservados.

## Soluções

- **Sistemas:** gestão, CRMs, financeiros, portais, SaaS e workflows.
- **Automação:** integrações, processamento, ETL, planilhas e rotinas.
- **Dados:** dashboards, BI, indicadores, modelagem, qualidade e análise.
- **Inteligência:** previsão, classificação, segmentação, anomalias e IA aplicada.

Sites e produtos web, APIs, MVPs e evolução de infraestrutura complementam essas frentes. O trabalho é contratado sob escopo: diagnóstico, desenvolvimento, validação e evolução. Não há preços automáticos para sistemas complexos.

## Projetos e evidências

A inspeção de 08/09/2026 identificou 26 repositórios públicos. A revisão de 09/09 seleciona dez projetos de produto e o SICMA, apresentado separadamente como desenvolvimento inicial. Exercícios da DIO, práticas introdutórias, forks e repositórios sem implementação ficam fora da seleção comercial. O inventário histórico completo permanece na documentação, sem inventar clientes, métricas ou uso em produção.

| Projeto | Página | Estágio verificado |
| --- | --- | --- |
| ClientFlow | `clientflow.html` | Protótipo frontend; erro de inicialização registrado |
| DecisionForge AI | `decisionforge-ai.html` | Demo de análise de dados e ML |
| Nossas Delícias | `nossas-delicias.html` | Plataforma Django em evolução |
| Curtailment Intelligence | `curtailment-intelligence.html` | Demo com dados sintéticos |
| Movimento | `movimento.html` | MVP na branch `feat/mvp` |
| Finance Manager | `gestao-financeira.html` | Edição pública reduzida |
| Pricing & Sales Manager | `precificacao-vendas.html` | Demo em Excel |
| Sales Intelligence | `analise-vendas.html` | Dashboard e CLI de análise |
| Coffee Five | `coffee-five.html` | Proposta de site e cardápio |
| Pata & Companhia | `pata-companhia.html` | MVP de interface |
| SICMA | `sicma.html` | Estrutura inicial Java / Spring Boot; implementação futura |

Nexa Institucional (`site-institucional-painel.html`) e RiftPilot (`riftpilot.html`) mantêm suas URLs antigas com `noindex`, fora dos destaques e do sitemap. `project.html?id=...` mantém os oito redirecionamentos antigos por lista permitida. Os principais anchors antigos da home também continuam disponíveis.

Os textos e as fontes ficam em `content/projects.json`. `docs/repository-audit.json` registra branches, revisões e arquivos consultados. A inspeção de código não equivale a certificação, contratação ou comprovação de produção. A captura do Coffee Five veio da interface real do repositório. As imagens de Pata & Companhia e Nossas Delícias foram fornecidas pelo usuário e copiadas integralmente. Finance Manager usa uma captura anonimizada, com nomes e valores genéricos. ClientFlow usa uma referência visual adaptada do painel de Nossas Delícias, rebatizada como Bolos & Massas e identificada como referência no card e na página; ela não comprova funcionalidades implementadas no protótipo. A procedência e as alterações estão em `docs/preview-provenance.json`.

## Identidade

A logo PNG fornecida pelo usuário em 09/09/2026 substitui o SVG anterior no cabeçalho, hero, rodapé, favicon, ícone Apple, manifesto e metadados sociais. O arquivo de 1254×1254 foi copiado sem alteração; o teste verifica seu SHA-256 conforme `docs/brand-provenance.json`. O nome MATRIZ continua como texto separado.

| Cor | Valor | Uso |
| --- | --- | --- |
| Carbon Black | `#0A0B0D` | Fundo principal |
| Graphite | `#15171A` | Superfícies |
| Forge White | `#F2F1ED` | Texto e seção de evidências |
| Steel | `#8C949D` | Informação secundária |
| Ember | `#FF402E` | Energia da marca |
| Hot Ember | `#FF8A45` | CTAs e destaques |

Space Grotesk, Inter e IBM Plex Mono são servidas localmente em WOFF2, com `font-display: swap`. As licenças OFL estão em `assets/fonts/`. Todos os usos da marca apontam para o mesmo PNG oficial, aproveitando o cache do navegador.

## Stack e estrutura

HTML semântico, CSS responsivo e JavaScript nativo. Nenhuma dependência de execução ou biblioteca de animação. Python gera os arquivos estáticos e reúne o contato em um único script local; Node fornece o servidor local e os testes de contato.

| Caminho | Finalidade |
| --- | --- |
| `index.html` | Home enxuta, seleção visual e contato por necessidade |
| `prices.html` / `contact.html` | Serviços sob escopo e contato |
| `privacy.html` / `security.html` | Práticas de privacidade e segurança |
| `repertoire.html` | Portfólio selecionado, SICMA e repositórios com filtros |
| `scripts/render.py` | Fonte dos templates e metadados |
| `content/projects.json` | Fonte editorial dos projetos |
| `assets/brand/` | Logo, favicons e social preview |
| `assets/css/` / `assets/js/` / `assets/fonts/` | Recursos locais |
| `tests/audit.py` | Integridade, marca, SEO, segurança e assets |
| `tests/contact.test.mjs` | Validação, payload, respostas e timeout |
| `tests/browser/` | Ferramentas locais de teste de viewport e formulário |
| `dist/` | Saída publicável, gerada e ignorada pelo Git |

## Execução local

Requisitos: **Node 22+ e Python 3.12+**. Não é necessário instalar pacotes.

```bash
npm run render
npm run dev
```

Abra `http://localhost:4173/`. Ao alterar os templates ou os dados, execute `npm run render`. Os HTML gerados permanecem versionados para facilitar inspeção e preservar os caminhos anteriores.

## Testes

```bash
npm test
npm run build
python3 tests/audit.py --dist
```

As verificações anteriores foram adaptadas à MATRIZ: arquivos obrigatórios, sintaxe JS, referências e anchors, IDs, semântica, CSP, atributos seguros, curadoria do portfólio, serviços, formulário, SEO e padrões de credenciais. Novos testes protegem a logo, favicons, fontes e saída pública.

O contato é testado com transporte simulado: validação, campos opcionais, payload permitido, sucesso explícito, resposta inválida, erro, limite de tentativas e timeout. Isso não atesta recebimento de email na caixa de destino.

Para QA de layout, abra `/__qa/` no servidor local. O painel cria viewports de 360, 375, 390, 430, 768, 1366, 1440 e 1920 pixels em um iframe. Os cenários locais de contato usam identificador de teste e bloqueiam conexões e submissões externas por CSP. Esse painel e os mocks são excluídos da publicação. A medição é de viewport CSS no Chromium; não substitui testes em aparelhos físicos ou em outros motores.

A rodada de validação e seus limites estão em [`docs/validation.md`](docs/validation.md).

## Contato, segurança e privacidade

O serviço Web3Forms existente foi mantido. Seu identificador público direciona formulários e não concede acesso administrativo. Não há credenciais privilegiadas no frontend. Nome, email, tipo de projeto e descrição são obrigatórios; empresa, WhatsApp e orçamento são opcionais.

O cliente aplica limites, validação, honeypot, bloqueio de envio simultâneo, intervalo de 15 segundos e timeout de 12 segundos. Falhas preservam os campos. A página de sucesso é aberta somente após resposta explícita de sucesso do serviço. Sem JavaScript, o formulário usa o POST nativo para o mesmo serviço.

Não há analytics, pixels de marketing ou fontes remotas. O armazenamento de sessão mantém apenas o horário da tentativa, sem persistir a mensagem. Consulte `SECURITY.md` e as páginas de privacidade e segurança para controles e limites da plataforma.

## Publicação e recuperação

O workflow `.github/workflows/pages.yml` valida antes de publicar a `main`. Somente o conteúdo de `dist/` entra no artifact do GitHub Pages; testes, mocks, documentação, fontes de geração e configuração ficam de fora. `dist/dataforge-portfolio/` contém os caminhos de compatibilidade usados pela página 404 em hospedagens por subdiretório.

A referência **`backup/pre-matriz-2026-09-07`** preserva o estado anterior, no commit `1f74f08ce8d7b300ab5ffff7b72e354afc70ff83`. Uma recuperação deve partir dessa referência e ser revisada antes de uma nova publicação; não exige renomear o repositório.

Canonical, Open Graph e sitemap usam o endereço real do GitHub Pages. `.openai/hosting.json` identifica também a visualização privada complementar do mesmo projeto; não altera o endereço público canônico.

## Licenças e atribuições

As fontes possuem licenças OFL incluídas. A logo oficial e os materiais de marca foram fornecidos pelo responsável pelo projeto. Capturas e referências mantêm o contexto e os créditos dos projetos. Este repositório não atribui uma nova licença geral nem direitos sobre marcas de terceiros.
