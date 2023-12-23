export default function getFilterQuery(query) {
    let queryString = ''
    if (query?.info) {
        queryString += `&filters[$or][0][username][$contains]=${query.info}&filters[$or][1][nickname][$contains]=${query.info}&filters[$or][2][phone][$contains]=${query.info}`
    }
    if (query?.group) {
        queryString += `&filters[$and][3][group]=${query.group}`
    }
    if (query?.isActive) {
        queryString += `&filters[$and][4][isActive]=${query.isActive}`
    }
    return queryString
}

