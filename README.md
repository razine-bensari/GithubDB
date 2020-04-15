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