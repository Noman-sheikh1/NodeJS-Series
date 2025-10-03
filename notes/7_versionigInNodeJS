📘 Notes: Versioning in Node.js & npm

________________________________________
--🔹 1. What is Versioning?
•	Versioning is a way to track changes and updates in software (like Node.js or npm packages).
•	It follows Semantic Versioning (SemVer) format:
MAJOR.MINOR.PATCH
Example: 16.13.1
________________________________________
--🔹 2. Breaking it Down
Part	Example (16.13.1)	Meaning
MAJOR	16	Big changes, may break old code (backward-incompatible).
MINOR	13	New features, backward-compatible.
PATCH	1	Bug fixes, small updates, backward-compatible.
✅ Rule:
•	MAJOR → Breaking changes.
•	MINOR → Additions/improvements (safe to upgrade).
•	PATCH → Bug/security fixes (safe to upgrade).
________________________________________
--🔹 3. Example Versions
•	1.0.0 → First stable release.
•	1.1.0 → New feature added (compatible).
•	1.1.1 → Bug fixed.
•	2.0.0 → Breaking changes introduced.
________________________________________
--🔹 4. Carat (^) and Tilde (~) in npm
When you install dependencies with npm/yarn, versions in package.json often have ^ or ~.
✅ Carat (^)
•	Example:
"express": "^4.17.1"
•	Means: Install the latest MINOR or PATCH update, but don’t change the MAJOR.
•	So ^4.17.1 can update to:
o	4.18.0, 4.18.5 ✅
o	Not 5.0.0 ❌ (because major changed).
________________________________________
--✅ Tilde (~)
•	Example:
"express": "~4.17.1"
•	Means: Install the latest PATCH update only, within the same MINOR.
•	So ~4.17.1 can update to:
o	4.17.2, 4.17.9 ✅
o	Not 4.18.0 ❌ (because minor changed).
________________________________________
--✅ No Symbol (Exact Version)
•	Example:
"express": "4.17.1"
•	Means: Always install exactly 4.17.1. No updates.
________________________________________
--🔹 5. Why Use Them?
•	^ (caret): Default, allows bug fixes + new features but avoids breaking changes.
•	~ (tilde): Safer, allows only bug fixes (patches).
•	Exact version: Maximum stability, but no updates.
________________________________________
--🔹 6. Node.js Versioning
•	Node.js itself also uses SemVer (MAJOR.MINOR.PATCH).
•	Example:
o	18.16.0 → Node.js v18, stable release.
o	20.x.x → Latest major release.
👉 Use nvm (Node Version Manager) to switch between versions:
nvm install 18
nvm use 18
________________________________________
--🔹 7. Interview Key Points
•	MAJOR.MINOR.PATCH → Semantic Versioning.
•	^ vs ~:
o	^ = update MINOR + PATCH.
o	~ = update PATCH only.
•	Exact version = no updates.
•	Use npm outdated to check newer versions.
•	Use npm update to update based on rules in package.json.
________________________________________

