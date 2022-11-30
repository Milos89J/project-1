const activities = {
  1546968548: {
    id: "1546968548",
    title: "Task one",
    notes: "Git rebase is danger command",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391,
  },
  1546969881: {
    id: "1546969881",
    title: "Task two",
    notes: "Added new repo on git",
    progress: 0,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391,
  },
};

const canContinue = () => {
  const rndNumber = Math.floor(Math.random() * 10);

  if (rndNumber > 5) {
    return true;
  }
  return false;
};

export const fetchActivities = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canContinue()) {
        resolve(activities);
      } else {
        reject("Cannot fetch");
      }
    }, 2000);
  });
};

const generateId = () => Math.floor(new Date() * Math.random());

export const createData = (data) => {
  data.id = generateId();
  data.progres = 0;
  data.createAt = new Date();
  data.updatedAt = new Date();

  return new Promise((resolve) => {
    resolve(data);
  });
};
export const fetchCategories = () => {
  return {
    1546969049: { text: "test01", id: "1546969049" },
    1546969225: { text: "test02", id: "1546969225" },
  };
};
export const fetchUser = () => {
  return {
    name: "Milos Jeremic",
    id: "-Aj34jknvncx98812",
  };
};
