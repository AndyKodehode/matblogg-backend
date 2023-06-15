export default{
    name: 'supper', 
    title: 'Supper',
    type: 'document',
    fields: [
      {name: 'oppskrift', 
       title: 'Oppskrift',
       type: 'string',
      },

         {name: 'image',
          title: 'Image',
          type:'image',
          options: {
            hotspot: true,
          }
          },

          {
            name: 'ingredienser',
            title: 'ingredienser',
            type: 'array',
            of:[
                {name:' ingrediens',
                 title: 'Ingrediens',
                 type:'string'}
            ]
          },

          {
            name: 'fremgangsmetode',
            title: 'Fremgangsmetode',
            type: 'string'
          }, 
          {
           name: 'slug',
           title: 'Slug',
           type: 'slug',
           options:{
            source:'oppskrift'
           } }
        
        ]
      }
    
    
