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
                hotspot: true,
              }
            }
          ]},

          {
            name:'slug',
            title: 'Slug',
            type: 'slug',
            // options: {
            //   source: 'name',
            //   maxLength: 100,
            // },
            }
    ]
}