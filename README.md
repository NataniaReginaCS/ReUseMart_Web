# ReuseMart 🛒

Reusemart is a web-based platform designed to support sustainable second-hand item sales, donations, and warehouse management. Built with Laravel for the backend and a modern UI on the frontend, Reusemart facilitates item consignments, donation management, and role-based access across various user types, including owners, couriers, warehouse staff, hunters, and customers.

#### Fitur Utama
- Item Consignment (Barang Titipan): Allows users with the "Penitip" role to consign items for sale. Supports multi-item consignments in a single transaction and detailed item management.
- Donations: Users can donate items, which are reviewed and approved by the Owner role. Donations are linked to organizations.
- Warehouse Management: Warehouse staff can manage the status, stock, and storage location of consigned items.
- Commission System: Customizable commission rules based on item conditions, extensions, and whether a hunter is involved.
- Point Redemption: Buyers can redeem accumulated points for rewards. Only available to users with the "Pembeli" role.
- Rating & Discussion: "Penitip" users can receive ratings and engage in discussions related to their items.
- User & Role Management: Uses Spatie Laravel Permission to implement fine-grained role-based access for Owners, Admins, Couriers, Warehouse Staff, Hunters, and Customers.
- Reports & Logs: Includes structured reports that log consignments, commissions, and transactions involving hunters and warehouses.
- Integrated Payment: One fixed payment method for simplicity.
- Internal Delivery: Deliveries are managed exclusively by internal couriers (no third-party services).
- Badge System: Badges are awarded to "Penitip" users based on performance or milestones.

## Preview
![image](https://github.com/user-attachments/assets/06f1a516-3b28-44e7-9291-2372e27859f1)
![image](https://github.com/user-attachments/assets/66996b2b-09b1-4f61-b072-bfdebf742d1c)
![image](https://github.com/user-attachments/assets/9be51875-69b0-4419-b3fb-0ae96893d39e)

