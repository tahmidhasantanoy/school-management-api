import prisma from "../../prisma";

const getClassList = () => {
  const result = prisma.class.findMany();
  return result;
};

const createClass = (data: { name: string }) => {
  const result = prisma.class.create({ data });
  return result;
};

export default {
  createClass,
  getClassList,
};
