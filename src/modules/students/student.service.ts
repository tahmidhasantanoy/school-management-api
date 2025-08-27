import prisma from "../../prisma";

const createStudent = (data: {
  name: string;
  age: number;
  classId?: string;
}) => {
  const result = prisma.student.create({ data });
  return result;
};

export default {
  createStudent,
};
