import prisma from "../../prisma";

const getClassList = () => {
  const result = prisma.class.findMany();
  return result;
};

const createClass = (data: { name: string }) => {
  const result = prisma.class.create({ data });
  return result;
};

const enrollAStudent = async (classId: string, studentId: string) => {
  // simple one-to-many: set student's classId
  const student = await prisma.student.update({
    where: { id: studentId },
    data: { classId },
    include: { class: true },
  });
  return student;
};

const allStudents = (classId: string) => {
  const result = prisma.student.findMany({ where: { classId } });
  return result;
};

export default {
  createClass,
  getClassList,
  enrollAStudent,
  allStudents
};
