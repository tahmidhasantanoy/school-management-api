import prisma from "../../prisma";

const createStudent = (data: {
  name: string;
  age: number;
  classId?: string;
}) => {
  const result = prisma.student.create({ data });
  return result;
};

const studentList = () => {
  const result = prisma.student.findMany({ include: { class: true } });
  return result;
};


export default {
  createStudent,
  studentList,
};
