import React from 'react';
import { Grid } from '../Grid/Grid';
import { Card } from '../Card/Card';

export const Images = ({ images, elementRef }) => {
  return (
    <Grid>
      {images.map((newData) =>
        newData.map((image, index) => {
          if (images.length === index + 1) {
            return (
              <Card title={image.title} ref={elementRef} key={index}>
                <img src={image.images.original.url} alt={image.slug} />
              </Card>
            );
          } else {
            return (
              <Card title={image.title} key={index}>
                <img src={image.images.original.url} alt={image.slug} />
              </Card>
            );
          }
        })
      )}
    </Grid>
  );
};
