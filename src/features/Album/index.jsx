import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      nameAlbum: 'Kết hợp gây nghiện',
      thumnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/c/b/8/3cb8984d6a55f87dd79ff0560cd70b15.jpg',
    },
    {
      id: 2,
      nameAlbum: 'Tâm Trạng Tan Chậm',
      thumnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/6/f/3/d6f33016a98ed79be7f13872bb6942d9.jpg',
    },
    {
      id: 3,
      nameAlbum: 'Viral Hits',
      thumnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/9/2/7/39276923fe8e5cbf55b7ad88920108d1.jpg',
    },
  ];

  return (
    <div>
      <h2>Album list</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
