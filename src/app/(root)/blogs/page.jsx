const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const Blogs = () => {
  const random = getRandomNumber(3);
  if (random === 1) {
    throw new Error("Intentional Error in Blogs Page");
  }
  return <div>Blogs</div>;
};

export default Blogs;
