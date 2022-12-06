import fakeApi from "@/lib/fakeApi";

const generateId = () => Math.floor(new Date() * Math.random());

export const fetchActivities = () => {
  return fakeApi.get('activities', {force: 1})
};

export const createData = (data) => {
  data.id = generateId();
  data.progress = 0;
  data.createAt = new Date();
  data.updatedAt = new Date();

 return fakeApi.post('activities', data)
};
export const fetchCategories = () => {
  return fakeApi.get('categories', {force: 1})
  
};
export const fetchUser = () => {
  return {
    name: "Milos Jeremic",
    id: "-Aj34jknvncx98812",
  };
};

export const deleteDataAPI = (activity) => {  //6 step delete, mi ovde povezujem sa fakeapi i definisemo sta 
                                                 //brisemo. prvo 5 pa 6
  return fakeApi.delete('activities', activity)
}