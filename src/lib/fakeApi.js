const data = {
  activities: {
    1546968548: {
      id: "1546968548",
      title: "Task one",
      notes: "Git rebase is danger command",
      progress: 50,
      category: "000000",
      createdAt: 1546969144391,
      updatedAt: 1546969144391,
    },
    1546969881: {
      id: "1546969881",
      title: "Task two",
      notes: "Added new repo on git",
      progress: 0,
      category: "000000",
      createdAt: 1546969144391,
      updatedAt: 1546969144391,
    },
  },
  categories: {
    1546969049: { text: "test01", id: "1546969049" },
    1546969225: { text: "test02", id: "1546969225" },
  }
};

class FakeApi {
    
canContinue () {
    const rndNumber = Math.floor(Math.random() * 10);
  
    if (rndNumber > 5) {
      return true;
    }
    return false;
  }
  
get (resource) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.canContinue()) {
          resolve(data[resource]);
        } else {
          reject("Cannot fetch");
        }
      }, 1000);
    });
  }
}
export default new FakeApi();
