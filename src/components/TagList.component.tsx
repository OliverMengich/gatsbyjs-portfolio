import React from 'react';
type Props={
    tags:string
}
function TagListComponent({tags}:Props) {
    return (
        <>
            {
                tags.split(',').map((tag: string) => {
                    return (
                        <h4 style={{
                            display: 'inline-block',
                            textTransform: 'uppercase',
                            padding: '0.5rem',
                            fontSize: 'calc(10px + 0.5vw)',
                            fontWeight: 700,
                            color: '#007e6a'}} key={tag}>{tag}</h4>
                    )
                })
            }
        </>
    );
}

export default TagListComponent;