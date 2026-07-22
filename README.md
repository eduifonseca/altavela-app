# Altavela · App de Milhas

Calculadora de milhas premium para emissões Business e First Class.

## Como hospedar no GitHub Pages (gratuito, 5 minutos)

### Passo 1 — Criar conta GitHub
Acesse [github.com](https://github.com) e crie uma conta gratuita (ou entre se já tiver).

### Passo 2 — Criar repositório
1. Clique em **New repository** (botão verde)
2. Nome: `altavela-app`
3. Marque **Public**
4. Marque **Add a README file**
5. Clique em **Create repository**

### Passo 3 — Fazer upload dos arquivos
1. No repositório criado, clique em **Add file → Upload files**
2. Arraste TODOS estes arquivos:
   - `index.html`
   - `calc-pontos.html`
   - `calc-emissao.html`
   - `comparativo.html`
   - `manifest.json`
   - `sw.js`
3. Clique em **Commit changes**

### Passo 4 — Ativar GitHub Pages
1. Vá em **Settings** (aba do repositório)
2. Menu lateral: **Pages**
3. Em Source, selecione **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Clique em **Save**
6. Aguarde 2-3 minutos

### Passo 5 — Seu URL
Seu app estará em:
```
https://SEU-USUARIO.github.io/altavela-app/
```

## Como instalar no iPhone

1. Abra o URL acima no **Safari** do iPhone (obrigatório — não funciona no Chrome)
2. Toque no ícone de compartilhar **↑** (barra inferior do Safari)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme com **"Adicionar"**

O ícone dourado "A" aparece na tela inicial. Abre como app nativo, sem barra do Safari.

## Conteúdo do app

| Arquivo | Conteúdo | Tamanho |
|---|---|---|
| `index.html` | App principal PWA (4 abas: Calcular, Comparar, Buscar, Decisão) | ~122kb |
| `calc-pontos.html` | Calculadora custo de pontos (Calcular + Comparar) | ~77kb |
| `calc-emissao.html` | Emissão e decisão (Buscar + Decisão) | ~89kb |
| `comparativo.html` | Comparativo de emissões 3 pax (Europa, EUA, Ásia) | ~29kb |

## Atualizar o app

Quando receber arquivos atualizados, basta fazer upload novamente no GitHub.
O cache do iPhone atualiza automaticamente na próxima abertura com internet.

---
*Altavela · jul/2026*
