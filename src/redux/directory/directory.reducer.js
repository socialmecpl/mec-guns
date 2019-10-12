const INITIAL_STATE =
    {
        sections: [
            {
                title: 'Arc Spray',
                imageUrl: 'https://www.mecpl.com/images/arcjet-96-gun.jpg',
                id: 1,
                linkUrl: 'arc'
              },
              {
                title: 'Plasma Spray',
                imageUrl: 'https://www.mecpl.com/images/plasma-spray-system-01.jpg',
                id: 2,
                linkUrl: 'plasma'
              },
              {
                title: 'hvof Spray',
                imageUrl: 'https://www.mecpl.com/images/hybrid-attachment.jpg',
                id: 3,
                linkUrl: 'hvof'
              },
              {
                title: 'flame Spray',
                imageUrl: 'https://www.mecpl.com/images/rodojet-9810-gun.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'flame'
              },
              {
                title: 'cold spray',
                imageUrl: 'https://www.mecpl.com/images/dymet-model-423.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'cold'
              }
        ]
    };

    const directoryReducer = (state = INITIAL_STATE, action) => {
        switch(action.type) {
            default:
                return state;
        }
    }

    export default directoryReducer;