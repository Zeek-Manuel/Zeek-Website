export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of the product',
            type: 'string',
        },
        {
            name:'image',
            title:"Image",
            type: "array",
            of: [{type:'image'}]
        },
        {
            name:'description',
            type: 'text',
            title: 'Description of the product',
        },
        {
            name:'slug',
            type:'slug',
            title: 'Slug of the product',
            options: {
                source: 'name'
            }
        },
        {
            name: 'category',
            title: 'Category of the product',
            type: 'reference',
            to: [{
                type: 'category'
            }]

        }
    ],
}