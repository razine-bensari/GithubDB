# GithubDB
Project Phase 2 for the undergraduate course SOEN 363 - Database Systems For Software Engineers, Concordia University WINTER 2020, Pr. Essam Mansour

Team GO
 -
Razine Bensari - 40029076

Mohamed Farah - 27552254

Israt Kazi Noor - 40029299

Marwan Ayadi - 40039895

Link to presentation:
https://docs.google.com/presentation/d/1XzOFYe03X3YaRY4EKWe-PFQdQo2ZsnB3DpSUuSw3VLY/edit?usp=sharing

Dataset is a 2.7 gb file. When uncompressed it is around 23.77 gb. When loaded into mongoDB it takes around 4.8gb of RAM.
The reason why this dataset is 23.77 gb it is because it contains both the JSON files collection and their BSON files counterparts.
However, only the JSON are used to load mongoDB, not BSON since we have no binary data (pictures, videos...)

How to load the dataset?
-

1. Downlod MongoDB

2. Download the dataset at the provided link

3. Start a mongo shell by typing in your terminal 
`mongo`

4. In the mongo shell type:
`use GithubDB`. You have now created a database called GithubDB

5. Load the dataset into your databse using the following command from the terminal
`mongorestore -d GithubDB /path/to/dataset`

6. You can now query the database using the GUI of your choice. Please make sure mongoDB is running on the correct defaulted port.

Note: You need around 5 gb of free RAM space.