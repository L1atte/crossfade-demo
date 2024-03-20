import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, useMemo, useState } from 'react';

type ObjectFit = CSSProperties['objectFit'];
type CrossFadeImgProps = {
  src: string;
  width: string;
  height: string;
  objectFit?: ObjectFit;
  duration?: string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const imgStyle: CSSProperties = {
  position: 'absolute',
  width: `100%`,
  height: `100%`,
  left: 0,
  top: 0,
};

const CrossFadeImg = ({
  src = '',
  width,
  height,
  objectFit = 'fill',
  duration = '1s',
  style,
  ...rest
}: CrossFadeImgProps) => {
  const spanStyle: CSSProperties = useMemo(
    () => ({
      display: 'inline-block',
      position: 'relative',
      width,
      height,
    }),
    [width, height],
  );

  const imgStyles = useMemo(
    () => [
      { ...imgStyle, ...style, objectFit, opacity: 0, transition: `opacity ${duration}` },
      { ...imgStyle, ...style, objectFit, opacity: 1, transition: `opacity ${duration}` },
      { ...imgStyle, ...style, objectFit, opacity: 0 },
    ],
    [style, objectFit, duration],
  );

  const [key, setKey] = useState(0);
  const [srcList, setSrcList] = useState(['', '']);
  const nextSrc = src !== srcList[1] ? src : '';

  const onLoadImg = () => {
    setKey((key + 1) % 3);
    setSrcList([srcList[1], nextSrc]);
  };

  return (
    <span style={spanStyle}>
      {[...srcList, nextSrc].map(
        (src, index) =>
          src !== '' && (
            <img
              className={String((key + index) % 3)}
              key={(key + index) % 3}
              src={src}
              style={imgStyles[index]}
              onLoad={index === 2 ? onLoadImg : undefined}
              {...rest}
            />
          ),
      )}
    </span>
  );
};

export { CrossFadeImg };
