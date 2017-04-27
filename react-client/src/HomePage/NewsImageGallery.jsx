import Slider from 'react-slick';
import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom';

class NewsImageGallery extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { hotNews } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    if (hotNews.length > 0) {
      return (
        <div className="twelve columns news-image-gallery-slider">
          <Slider {...settings}>
          <div><a href={hotNews[0].url}><img src={hotNews[0].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[0].title}</div></a></div>
          <div><a href={hotNews[1].url}><img src={hotNews[1].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[1].title}</div></a></div>
          <div><a href={hotNews[2].url}><img src={hotNews[2].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[2].title}</div></a></div>
          <div><a href={hotNews[3].url}><img src={hotNews[3].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[3].title}</div></a></div>
          <div><a href={hotNews[4].url}><img src={hotNews[4].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[4].title}</div></a></div>
          <div><a href={hotNews[5].url}><img src={hotNews[5].url_to_image}/><div className="news-image-gallery-slide-title">{hotNews[5].title}</div></a></div>
          </Slider>
        </div>
      )
    } else {
      return (
        <div>Loading News! </div>
        )
    }
  }
}

export default NewsImageGallery;