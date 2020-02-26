function convertDate(value) {
  const rValue = value < 10 ? `0${value}` : value;
  return rValue;
}

function printData(valueDate) {
  const itemDate = new Date(valueDate);
  const date = convertDate(itemDate.getDate());
  const month = convertDate(itemDate.getMonth() + 1);
  const year = convertDate(itemDate.getFullYear());
  const hours = convertDate(itemDate.getHours());
  const minut = convertDate(itemDate.getMinutes());
  // const second = convertDate(itemDate.getSeconds());
  const itemCreated = `${hours}:${minut} ${date}.${month}.${year}`;
  return itemCreated;
}

export default class AddMsg {
  constructor(parentElement) {
    this.parentEl = parentElement;
  }

  addItemMsg(objMsg) {
    const { from, subject, received } = objMsg;
    const itemSub = subject.length > 15 ? `${subject.substr(0, 15)}...` : subject;
    const itemMsg = document.createElement('div');
    itemMsg.className = 'item-msg';
    itemMsg.innerHTML = `
      <div class='item-from'>${from}</div>
      <div class='item-subject'>${itemSub}</div>
      <div class='item-received'>${printData(received)}</div>
    `;
    this.parentEl.prepend(itemMsg);
  }

  addMessages(arrMsg) {
    if (arrMsg.length > 0) {
      for (const item of arrMsg) {
        this.addItemMsg(item);
      }
    }
  }
}
