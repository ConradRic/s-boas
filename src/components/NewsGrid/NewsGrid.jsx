import { NewsCard } from "../NewsCard/NewsCard"
import "./NewsGrid.css"

const newsList = [
    {
        id: 1,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
    {
        id: 2,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
    {
        id: 3,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
    {
        id: 4,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
    {
        id: 5,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
    {
        id: 6,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
     {
        id: 7,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o país ao pódio",
        category: "Esporte",
        image: "https://i.pinimg.com/474x/1c/0d/aa/1c0daa843c060902e19f124417ff153e.jpg"
    },
]

export function NewsGrid() {
    return (
        <div className="news-grid">
            <div className="news-header">
                <h2>Todas as notícias</h2>
                <span>{newsList.length}notícias</span>
            </div>

            <div className="news-cards">
                {
                    newsList.map((news) => (
                        <NewsCard news={news}/>
                    ))
                }
            </div>

        </div>

    )
}