# 🧠 Site Profissional - Psicólogo(a)

Este é um site institucional desenvolvido para um(a) psicólogo(a), com foco em apresentação profissional, serviços oferecidos, benefícios da terapia e contato. O projeto foi criado com Next.js e Tailwind CSS para garantir performance, SEO, responsividade e facilidade de manutenção.

---

## 🔧 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – Framework React para SSR/SSG
- [React](https://react.dev/) – Biblioteca de interfaces
- [Tailwind CSS](https://tailwindcss.com/) – Estilização rápida e responsiva
- [Vercel](https://vercel.com/) – Deploy contínuo e seguro
- [ESLint + Prettier] – Padronização e qualidade de código (opcional)

---

## 📁 Estrutura do Projeto

psicologo-site/
├── public/ # Imagens, favicon, etc.
├── src/
│ ├── components/ # Componentes reutilizáveis (Header, Footer, etc.)
│ ├── pages/ # Rotas do Next.js (index.js, sobre.js, etc.)
│ ├── styles/ # Estilo global e utilitários
│ └── data/ # Dados estáticos opcionais (serviços, textos)
├── .gitignore
├── next.config.js
├── README.md
└── package.json

---

## 🚀 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Acesse o diretório
cd psicologo-site

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
Abra http://localhost:3000 no navegador para visualizar.

✅ Funcionalidades previstas
 Página inicial com resumo e CTA

 Página "Sobre" com informações profissionais

 Página "Serviços" com especialidades

 Página "Contato" com formulário

 Integração futura com backend para formulários

 Inclusão de blog com dicas e artigos

 Tradução multilíngue (português e inglês)

🔐 Segurança
Certificado HTTPS via Vercel

Validação de campos de formulário

Sem armazenamento de dados no frontend

Preparado para integração com reCAPTCHA e envio seguro

📦 Deploy
O projeto utiliza Vercel para CI/CD:

Cada push na branch main atualiza automaticamente o site.

Deploy manual também pode ser feito com vercel --prod.

✍️ Autor
Desenvolvido por Gustavo Rodrigues
LinkedIn | Portfólio
