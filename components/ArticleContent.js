import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ArticleContent = ({ content }) => {

    return (
        <div className="prose article-content">
            {documentToReactComponents(content)}
        </div>

    )
}

export default ArticleContent;