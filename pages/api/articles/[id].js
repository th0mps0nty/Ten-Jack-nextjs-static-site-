import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
    const filtered = articles.filter((article) => article.id === id)

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res
              .status(404)
              .json({ message: `article with ID ${id} is not found` })
}
