class Wallet {
  private color: string;
  private size: number;
  private money: number;
  private isOpened: boolean;
  private lost: boolean;

  constructor(color: string, size: number) {
    this.color = color;
    this.size = size;
    this.money = 0;
    this.isOpened = false;
    this.lost = false;
  }

  open(): void {
    this.isOpened = true;
  }

  close(): void {
    this.isOpened = false;
  }

  addMoney(amount: number): void {
    if (!this.isOpened) {
      console.log("Wallet is closed.");
      return;
    }

    this.money += amount;
  }

  getMoney(): number {
    return this.money;
  }

  checkMoney(): void {
    console.log(`Money inside: ${this.money}`);
  }

  isLost(): boolean {
    return this.lost;
  }

  lose(): void {
    this.lost = true;
  }
}

export default Wallet;
