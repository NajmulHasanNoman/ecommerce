-- AlterTable
ALTER TABLE `invoices` MODIFY `delivery_status` ENUM('Pending', 'Processing', 'Completed', 'Cancelled') NOT NULL;
