interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  return (
    <div>
      <div>Title</div>
      <div>{children}</div>
      <div>See more</div>
    </div>
  );
};

export default Carousel;
