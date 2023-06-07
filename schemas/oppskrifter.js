export default{
    name: 'oppskrifter', 
    title: 'Oppskrifter',
    type: 'document',
    fields:[
        {name:'oppskrift', 
         title: 'Oppskrift',
         type: 'string' },

         {name: 'image',
          title: 'Image',
          type:'image',
          options: {
            hotspot: true,
          }
          },

          {
            name: 'ingredisenser',
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
          }

        
      
    ]
}