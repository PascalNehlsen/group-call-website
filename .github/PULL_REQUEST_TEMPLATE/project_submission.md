## Project Submission

TBD

### Submission

> These items must be completed on the **campus platform** as part of your project submission — not in this PR.

- [ ] GitHub repository URL provided
- [ ] GitHub Pull Request URL provided
- [ ] Loom video link provided
- [ ] VM IP address provided
- [ ] Admin credentials provided

#### Loom Video

- [ ] Maximum duration of 5 minutes was respected
- [ ] Speech is understandable
- [ ] Shows how the application is started
- [ ] Briefly demonstrates the implementation of the feature
- [ ] Shows how to log into the admin portal
- [ ] Products are created via data seed

### Repository

- [ ] Contains a Pull Request from the feature branch to the default branch
- [ ] Pull Request branch contains more than one commit
- [ ] README present and contains a section about the new feature "Tags"

### Implementation

- [ ] There is a model named "Tag" that can be assigned to one or more products
- [ ] Tags have been added to the admin panel and can be viewed via Django Admin
- [ ] The fields `created_at` and `updated_at` are read-only fields and cannot be added or edited via the admin portal
- [ ] The Product model has a `tags` property that can be linked to the product via a ManyToMany relation, meaning multiple tags can be added to a product in the admin portal
- [ ] Tests include test cases that verify the new Tags feature — at minimum one test case covering a failure scenario and one test case verifying a successful execution (i.e. correct creation of a tag)
- [ ] The product views have been updated so that tags are displayed on the product page
- [ ] The comment field on a product review is cleared after submission
- [ ] If a product has no tags, an italic label "no tags available" should be displayed

### README.md

- [ ] Heading as H1 — title of the repo/project
- [ ] Description of the repository in a maximum of 2–5 complete sentences directly below the title
- [ ] Contains a TOC section (Table of Contents)
- [ ] Contains a Quickstart section — maximum 10 bullet points with 1–2 lines of text each
- [ ] Contains a Usage section — extended usage and configuration guide
- [ ] Contains an overview of features as a list; each feature should be explained in 1–3 sentences describing how to use the functionality or what to keep in mind

### .gitignore

- [ ] Ignores all known patterns for Python code (`.pyc`, `__pycache__`, `*venv`, `*egg`)
- [ ] Ignores all files of type .DS_Store (macOS specific)
- [ ] Ignores all patterns related to dotenv (*.env)
- [ ] Exception to the dotenv rule: the file `example.env` is not ignored

### Testing

- [ ] The application can be started in a container and is accessible in the browser at `localhost:<PORT>`
- [ ] Static files load correctly (CSS & JS) — Django admin panel looking correct is a good indicator
- [ ] Can log into the Django admin portal
- [ ] Can create new products via the portal
- [ ] Can create new categories via the portal
- [ ] Can create new tags via the portal
- [ ] Can add tags to products via the admin portal
- [ ] The website displays tags on the product pages