/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

async function createMarkdownPages({
  graphql,
  createPage,
  reporter,
  folderRegex,
  templatePath,
  slugPrefix = '',
  limit = 1000,
  enablePagination = false, // Optional if you want next/previous links
}) {
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "${folderRegex}" } }
        sort: { frontmatter: { date: ASC } }
        limit: ${limit}
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error loading markdown files for ${folderRegex}`, result.errors);
    return;
  }

  const items = result.data.allMarkdownRemark.nodes;

  // Optional: Filter logic, adjust as needed
  const filteredItems = items.filter(
    (node) => node.frontmatter.title !== 'resume' && !node.frontmatter.categories?.includes('test')
  );

  filteredItems.forEach((item, index) => {
    const previousId = enablePagination && index !== 0 ? filteredItems[index - 1].id : null;
    const nextId =
      enablePagination && index !== filteredItems.length - 1 ? filteredItems[index + 1].id : null;

    console.log(`${slugPrefix}${item.fields.slug}`);

    createPage({
      path: `${slugPrefix}${item.fields.slug}`, // Prefix for route consistency
      component: templatePath,
      context: {
        id: item.id,
        ...(enablePagination && { previousPostId: previousId, nextPostId: nextId }),
      },
    });
  });
}

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.tsx`);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: "/content/blog/" } }
  //       sort: { frontmatter: { date: ASC } }
  //       limit: 1000
  //     ) {
  //       nodes {
  //         id
  //         fields {
  //           slug
  //         }
  //         frontmatter {
  //           title
  //           categories
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (result.errors) {
  //   reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
  //   return;
  // }
  // const posts = result.data.allMarkdownRemark.nodes.filter(
  //   (node) => node.frontmatter.title !== 'resume' && !node.frontmatter.categories.includes('test')
  // );

  // console.log(posts);

  // // Create blog posts pages
  // // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // // `context` is available in the template as a prop and as a variable in GraphQL

  // if (posts.length > 0) {
  //   posts.forEach((post, index) => {
  //     const previousPostId = index === 0 ? null : posts[index - 1].id;
  //     const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

  //     createPage({
  //       path: post.fields.slug,
  //       component: blogPost,
  //       context: {
  //         id: post.id,
  //         previousPostId,
  //         nextPostId,
  //       },
  //     });
  //   });
  // }

  await createMarkdownPages({
    graphql,
    createPage,
    reporter,
    folderRegex: '/content/blog/',
    templatePath: path.resolve(`./src/templates/blog-post.tsx`),
    // slugPrefix: '/blog', // Optional, can be empty if you already add prefix in onCreateNode
    enablePagination: true,
  });

  // Call for projects
  await createMarkdownPages({
    graphql,
    createPage,
    reporter,
    folderRegex: '/content/projects/',
    templatePath: path.resolve(`./src/templates/project-post.tsx`),
    // slugPrefix: '/projects',
  });
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    const parent = getNode(node.parent);

    // Detect which folder this file belongs to
    let slugPrefix = '';
    if (/content\/blog/.test(parent.absolutePath)) slugPrefix = '/posts';
    if (/content\/projects/.test(parent.absolutePath)) slugPrefix = '/projects';

    console.log({ slugPrefix, value });

    createNodeField({
      name: `slug`,
      node,
      value: `${slugPrefix}${value}`, // Final slug like `/blog/my-post/` or `/projects/my-project/`
    });
    // const value = createFilePath({ node, getNode });

    // createNodeField({
    //   name: `slug`,
    //   node,
    //   value,
    // });
  }
};
