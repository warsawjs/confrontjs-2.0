import * as React from "react";

const url = process.env.NEXT_PUBLIC_REMOTE_DATA_URL;

export const fetchData = (filename: string) =>
  fetch(`${url}/${filename}.json`)
    .then((r) => r.json())
    .then((r) => {
      if (filename === "info" || filename === "venue") {
        const info = Object.assign(
          {},
          ...r.map((e: any) => ({ [e.id]: e.data }))
        );
        return info;
      }
      return !r || r.push ? r || [] : Object.values(r);
    });

export function useRemoteData(
  filename: string,
  setData: boolean | ((s: object[]) => void) = false,
  interval = 2
) {
  if (typeof setData === "function") {
    React.useEffect(() => {
      const id = window.setInterval(() => {
        fetchData(filename).then(setData);
      }, interval * 1e3);
      return () => window.clearInterval(id);
    }, []);
  }
  return fetchData(filename);
}

export function buildStaticProps(sections: string[] = []) {
  return async () => {
    const speakers = await fetchData("speakers");
    const venue = await fetchData("venue");
    const hotels = await fetchData("hotels");
    const attractions = await fetchData("attractions");
    const testimonials = await fetchData("testimonials");
    const previous = await fetchData("previous");
    const tickets = await fetchData("tickets");
    const info = await fetchData("info");
    const schedule = await fetchData("schedule");
    const staff = await fetchData("staff");
    const ret = {
      props: {
        speakers,
        venue,
        hotels,
        attractions,
        testimonials,
        previous,
        tickets,
        info,
        schedule,
        staff,
      },
    };
    return ret;
  };
}

export function useData(
  initialData: { speakers?: any; [key: string]: any },
  sheetName?: string,
  intervalInSec?: number
) {
  const [data, setData] = React.useState(initialData);
  Object.keys(initialData).map((sheetName) => {
    useRemoteData(
      sheetName,
      (data) =>
        setData((d: any) => {
          const filteredData = data.filter
            ? data.filter((e: any) => Object.values(e).some(Boolean))
            : data;
          return { ...d, [sheetName]: filteredData };
        }),
      intervalInSec
    );
  });
  return data;
}
