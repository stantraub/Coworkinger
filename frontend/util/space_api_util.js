export const fetchSpaces = () => (
    $.ajax({
        method: 'get',
        url: '/api/spaces'
    })
)

export const fetchSpace = (id) => (
    $.ajax({
        method: 'get',
        url: `/api/spaces/${id}`
    })
)

export const createSpace = (space) => (
    $.ajax({
        method: "post",
        url: "/api/spaces",
        contentType: false,
        processData: false,
        data: space
    })
)

export const updateSpace = (space) => (
    $.ajax({
        method: 'update',
        url: `/api/spaces/${space.id}`,
        data: { space }
    })
)

export const deleteSpace = (id) => {
    $.ajax({
        method: 'delete',
        url: `/api/spaces/${id}`
    })
}