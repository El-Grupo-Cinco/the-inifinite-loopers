// Define a function named create_UUID that generates a version 4 UUID.
export function create_UUID(uuid) {
  //added to alllow for single constructor in User class
  if (uuid !== "") {
    return uuid;
  }

  // Get the current time in milliseconds since the Unix epoch.
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
