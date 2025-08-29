class ProductServices {

    constructor() {
        this.productsCreated = [];
    }

    createOne(newProduct) {
        try {
            if (!newProduct) {
                return {
                    status: "wrong",
                    message: "No product object sent."
                };
            }
            const product = { ...newProduct };
            this.productsCreated.push(product);
            delete product.key;
            return {
                status: "correct",
                message: "New product added successfully.",
                newProduct: product
            };
        } catch (err) {
            console.error('Cannot create a new product:', err.message);
            throw new Error(`Cannot create a new product: ${err.message}`);
        }
    }

    listOne(productID) {
        try {
            if (!productID) {
                return {
                    status: "wrong",
                    message: "No product id sent."
                };
            }
            const theProduct = this.productsCreated.find(p => p.id === productID);
            if (!theProduct) {
                return {
                    status: "wrong",
                    message: "Product not found."
                };
            }
            const productCopy = { ...theProduct };
            delete productCopy.key;
            return {
                status: "correct",
                message: "Product found successfully.",
                product: productCopy
            };
        } catch (err) {
            console.error('Cannot find the product:', err.message);
            throw new Error(`Cannot find the product: ${err.message}`);
        }
    }

    listAll() {
        try {
            const allProducts = this.productsCreated.map(p => {
                const copy = { ...p };
                delete copy.key;
                return copy;
            });
            return {
                status: "correct",
                message: "Products found successfully.",
                products: allProducts
            };
        } catch (err) {
            console.error('Cannot find the products:', err.message);
            throw new Error(`Cannot find the products: ${err.message}`);
        }
    }

    deleteOne(productID) {
        try {
            if (!productID) {
                return {
                    status: "wrong",
                    message: "No product id sent."
                };
            }
            const index = this.productsCreated.findIndex(p => p.id === productID);
            if (index === -1) {
                return {
                    status: "wrong",
                    message: "Product not found."
                };
            }
            const [deletedProduct] = this.productsCreated.splice(index, 1);
            const productCopy = { ...deletedProduct };
            delete productCopy.key;
            return {
                status: "correct",
                message: "Product deleted successfully.",
                product: productCopy
            };
        } catch (err) {
            console.error('Cannot delete the product:', err.message);
            throw new Error(`Cannot delete the product: ${err.message}`);
        }
    }

    updateOne(productID, newProduct) {
        try {
            if (!productID) {
                return {
                    status: "wrong",
                    message: "No product id sent."
                };
            }
            if (!newProduct) {
                return {
                    status: "wrong",
                    message: "No new product data sent."
                };
            }
            const index = this.productsCreated.findIndex(p => p.id === productID);
            if (index === -1) {
                return {
                    status: "wrong",
                    message: "Product not found."
                };
            }
            const updatedProduct = { ...newProduct };
            this.productsCreated[index] = updatedProduct;
            delete updatedProduct.key;
            return {
                status: "correct",
                message: "Product updated successfully.",
                product: updatedProduct
            };
        } catch (err) {
            console.error('Cannot update the product:', err.message);
            throw new Error(`Cannot update the product: ${err.message}`);
        }
    }

    findByName(name) {
        try {
            if (!name) {
                return {
                    status: "wrong",
                    message: "No name sent."
                };
            }
            const results = this.productsCreated.filter(p =>
                p.name.toLowerCase().includes(name.toLowerCase())
            ).map(p => {
                const copy = { ...p };
                delete copy.key;
                return copy;
            });

            if (results.length === 0) {
                return {
                    status: "wrong",
                    message: "No products found with that name."
                };
            }

            return {
                status: "correct",
                message: "Products found successfully.",
                products: results
            };
        } catch (err) {
            console.error('Cannot search products by name:', err.message);
            throw new Error(`Cannot search products by name: ${err.message}`);
        }
    }

    findMostExpensive() {
        try {
            if (this.productsCreated.length === 0) {
                return {
                    status: "wrong",
                    message: "No products available."
                };
            }

            const mostExpensive = this.productsCreated.reduce((prev, current) =>
                current.price > prev.price ? current : prev
            );

            const productCopy = { ...mostExpensive };
            delete productCopy.key;

            return {
                status: "correct",
                message: "Most expensive product found successfully.",
                product: productCopy
            };
        } catch (err) {
            console.error('Cannot find the most expensive product:', err.message);
            throw new Error(`Cannot find the most expensive product: ${err.message}`);
        }
    }
}

const services = new ProductServices();

console.log("new Product:");
console.log(services.createOne({ id: 1, name: "Laptop", price: 3500, key: "secret123" }));
console.log("new Product:");
console.log(services.createOne({ id: 2, name: "Mouse", price: 50, key: "secret456" }));
console.log("new Product:");
console.log(services.createOne({ id: 3, name: "Monitor", price: 200, key: "secret789" }));

console.log("all Products:");
console.log(services.listAll());

console.log("one product:");
console.log(services.listOne(2));

console.log("update a product:");
console.log(services.updateOne(2, { id: 2, name: "Mouse Gamer", price: 70, key: "secret999" }));

console.log("one Product:");
console.log(services.listOne(2));

console.log("delete a Product:");
console.log(services.deleteOne(1));

console.log("all Products:");
console.log(services.listAll());

console.log("one product:");
console.log(services.listOne(99));

console.log("delete a Product:");
console.log(services.deleteOne(99));

console.log("update a product:");
console.log(services.updateOne(99, { id: 99, name: "Fake", price: 0 }));

console.log("find by name:");
console.log(services.findByName("mouse"));

console.log("most expensive:");
console.log(services.findMostExpensive());
