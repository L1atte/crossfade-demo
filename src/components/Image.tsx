import { Fragment, useMemo, useState } from 'react';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';

import { unsplash } from '../service';

function Image() {
  const [inputVal, setInputVal] = useState<string>('');
  const [data, setPhotosResponse] = useState<ApiResponse<Photos> | null>(null);

  function handleClick() {
    console.log('click');
    unsplash.search
      .getPhotos({
        query: inputVal,
        orientation: 'landscape',
        perPage: 100000,
      })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }

  const content = useMemo(() => {
    if (data === null) {
      return <div>Loading...</div>;
    } else if (data.errors) {
      return (
        <div>
          <div>{data.errors[0]}</div>
          <div>PS: Make sure to set your access token!</div>
        </div>
      );
    } else {
      return (
        <div className="feed">
          <ul className="columnUl">
            {data.response.results.map(photo => (
              <li
                key={photo.id}
                className="li"
              >
                <Fragment>
                  <img
                    className="img"
                    src={photo.urls.regular}
                  />
                  <a
                    className="credit"
                    target="_blank"
                    href={`https://unsplash.com/@${photo.user.username}`}
                  >
                    {photo.user.name}
                  </a>
                </Fragment>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }, [data]);

  return (
    <div>
      <div>image</div>
      <input
        value={inputVal}
        onChange={e => {
          setInputVal(e.target.value);
        }}
      />
      <div>{inputVal}</div>
      <button onClick={handleClick}>search</button>
      {content}
    </div>
  );
}

export { Image };
