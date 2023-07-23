export interface Item {
  // PRIMARY KEY 唯一id
  id: number;

  // 界面nodes
  htmlBody: string;

  // 创建时间
  createTime: string;

  // 创建用户
  user: string;
}

class IndexedDBWrapper {
  private db: IDBDatabase | null;
  private dbName: string;
  private storeName: string

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName
    this.storeName = storeName
    this.db = null
  }

  public openDatabase(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
        this.db.createObjectStore(this.storeName, { keyPath: 'id' });
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
        resolve();
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };
    });
  }

  public addItem(item: Item): Promise<void> {

    const db = this.db

    if (!db) throw new Error("IndexedDBWrapper初始化失败")

    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add(item);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  public getAllItems(): Promise<Item[]> {

    const db = this.db

    if (!db) throw new Error("IndexedDBWrapper初始化失败")

    return new Promise<Item[]>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readonly');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const items: Item[] = (request as IDBRequest<Item[]>).result;
        resolve(items);
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  public async deleteItem(itemId: number): Promise<boolean> {
    const db = this.db;
  
    if (!db) throw new Error("IndexedDBWrapper初始化失败");
  
    return new Promise<boolean>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.delete(itemId);
  
      request.onsuccess = () => {
        resolve(true);
      };
  
      request.onerror = () => {
        reject((request as IDBRequest).error);
      };
  
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }
}

/**
 * 初始化IndexDB数据库
 */
const dbWrapper = new IndexedDBWrapper('ignition', 'history');


export const getHisotryList = async () => {
  await dbWrapper.openDatabase()
  const data = await dbWrapper.getAllItems()
  return data
}


export const setHistoryRecord = async (record: Item) => {
  await dbWrapper.openDatabase()
  const data = await dbWrapper.addItem(record)
  return data
}

export const delHistoryRecord = async (record: Item)  => {
  await dbWrapper.openDatabase()
  const data = await dbWrapper.deleteItem(record.id)
  return data
}