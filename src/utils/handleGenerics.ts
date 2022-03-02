export const getTotalPayment = (workers: any) => {
  const getTotal = (total: any, item: any) => {
    return total + item.payment;
  };

  return workers.reduce(getTotal, 0).toFixed(2);
};

export const handleLocations = (workers: any) => {
  const locations = workers.map((worker: any) => worker.location);
  const chartFormat = locations.reduce((acc: any, val: any) => {
    if (!acc[val])
      acc[val] = {
        name: val,
        quantity: 1,
      };
    else acc[val]["quantity"]++;
    return acc;
  }, {});
  const locationsPerWorkers = Object.values(chartFormat);
  const names = locationsPerWorkers.map((result: any) => result.name);
  const quantities = locationsPerWorkers.map((result: any) => result.quantity);

  return { names, quantities };
};

export const handlePositions = (workers: any) => {
  const positions = workers.map((worker: any) => worker.position);
  const chartFormat = positions.reduce((acc: any, val: any) => {
    if (!acc[val])
      acc[val] = {
        name: val,
        quantity: 1,
      };
    else acc[val]["quantity"]++;
    return acc;
  }, {});
  const positionsPerWorkers = Object.values(chartFormat);
  const names = positionsPerWorkers.map((result: any) => result.name);
  const quantities = positionsPerWorkers.map((result: any) => result.quantity);

  return { names, quantities };
};
