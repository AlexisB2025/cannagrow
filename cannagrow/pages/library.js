// pages/library.js
export default function Library() {
  const articles = [
    { id: 1, title: 'Cómo regar tus plantas', content: 'Lorem ipsum...' },
    { id: 2, title: 'Tipos de fertilizantes', content: 'Lorem ipsum...' },
    { id: 3, title: 'Cepa Indica vs Sativa', content: 'Lorem ipsum...' }
  ]

  return (
    <div className="library-container">
      <h1>Biblioteca Cannagrow</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
