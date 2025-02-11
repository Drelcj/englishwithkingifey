// Utility function: src/utils/courseAccess.ts

import { prisma } from "@/prisma/prisma";
export const checkCourseAccess = async (userId: string, courseId: string) => {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { author: true }
    });
  
    if (!course?.isPaid) return true;
    
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId, courseId }
    });
  
    return !!enrollment || course.authorId === userId;
  };