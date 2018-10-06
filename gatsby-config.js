module.exports = {
	siteMetadata: {
		title:
			'Liferay.Design | Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
		author: 'Ryan Garant',
	},
	plugins: [
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/images`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1035,
							sizeByPixelDensity: true,
						},
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
						},
					},
				],
			},
		},
	],
}
