import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
export default class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'Arc',
                    imageUrl: 'https://www.mecpl.com/images/arcjet-96-gun.jpg',
                    id: 1
                  },
                  {
                    title: 'plasma',
                    imageUrl: 'https://www.mecpl.com/images/plasma-spray-system-01.jpg',
                    id: 2
                  },
                  {
                    title: 'hvof',
                    imageUrl: 'https://www.mecpl.com/images/hybrid-attachment.jpg',
                    id: 3
                  },
                  {
                    title: 'flame',
                    imageUrl: 'https://www.mecpl.com/images/rodojet-9810-gun.jpg',
                    size: 'large',
                    id: 4
                  },
                  {
                    title: 'cold',
                    imageUrl: 'https://www.mecpl.com/images/dymet-model-423.jpg',
                    size: 'large',
                    id: 5
                  }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}