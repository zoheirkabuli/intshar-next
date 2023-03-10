/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clf3wqdae4ezj01tdaotael9c/master',
    TOKEN:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzg2MzM2MDQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xmM3dxZGFlNGV6ajAxdGRhb3RhZWw5Yy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzFhM2JiYmQtMjc4Yi00Yjg2LThhZWYtY2ZhZGMyNzVlMjU2IiwianRpIjoiY2xmNWozdjNyNTQ0djAxdDc3c3h3NmZsZCJ9.Gi_XxgjIg-GubKis6NSPwAQ-mTrwSnuOXOlXIQgwuFjSu4-91tme_6rIi-T6QCLd5GYsgmE1qUaBIP6mEEiyKtWGpaRLURO7DHcyDk5jjnyfxFBUHm6dd8JsG-r87iEG7B9h1buNMWpv9WJpJ8lRGrE3e3viLsQD2vPAyVlyZBCHOtBjkwBmBIJByAZiYWp9ypheUGb04RwlofgJhQP8SyqoutRJwd61iip3Y-GbU7-qS_z4fH4k4J3lb8p8kksLQujS_0qVuRdmRVIZakghkKskadY_j9j4M9vEZXFSkokafJi_nYVAaJVfn3oa7vF4wYbZEzcrjoJ7RatCOt__kW-HKkrD3ZJxT8tnkVzGOL_V4Z18upTtZFtXg3_ZygUUBPdDDkSdgtZ6PmrePgxTOQ61mYnEE3NFW-mn5Ile6QeIkT9APQnm6W96HCYUM66gpj1GG1PHD54ltrfCb6xAjr0PXqgUGiwAwTzzRfzpfT5HP7O01iwXEWgpikPFD7myjD_bTD0BCzp1Kgi7ej9nnW-0DQx55_bohGCj-zDRLDa_EyxuXcl5uLb-4djXFvD087C6chsbrcuC6JW9JFg1Q6HTAsNF3ijpFINI1TTpM5o-VkFc3CMkEE2VEjP2FB1g3J3QcGrIppIZ7JxeRDp75zjZs54piHFyAwzHri_nY_I',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
