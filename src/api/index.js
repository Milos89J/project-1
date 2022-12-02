import fakeApi from "@/lib/fakeApi";

const generateId = () => Math.floor(new Date() * Math.random());

export const fetchActivities = () => {
  return fakeApi.get('activities')
};

export const createData = (data) => {
  data.id = generateId();
  data.progress = 0;
  data.createAt = new Date();
  data.updatedAt = new Date();

  return new Promise((resolve) => {
    resolve(data);
  });
};
export const fetchCategories = () => {
  return fakeApi.get('categories')
  
};
export const fetchUser = () => {
  return {
    name: "Milos Jeremic",
    id: "-Aj34jknvncx98812",
  };
};
