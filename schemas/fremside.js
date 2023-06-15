export default{
    name: 'fremside',
    title: 'Fremside',
    type: 'document',
    fields: [
        {name:'overskrift',
         title: 'Overskrift',
         type: 'string'},

         {name:'matInfo',
          title: 'Mat jeg liker å lage',
          type: 'string'},

          {name:'bilder',
          title: 'Bilder',
          type: 'array',
          of:[
            

            {name: 'bilde',
             bilde:'Bilde',
             type: 'image',
             options: {
                title: 'navn',
                name: 'navn',
                hotspot: true,
              }
            }
          ]},

          {
            name:'slug',
            title: 'Slug',
            type: 'slug'
          
            }
    ]
}



// {name: 'supper',
//              title: 'Supper', 
//              type: 'string'},

//              {name: 'pizza', 
//               title: 'Pizza',
//               type: 'string'},

//               {name:'restemiddag',
//                title: 'restemiddag',
//                type: 'string'},