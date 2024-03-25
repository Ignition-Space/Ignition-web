import ky from 'ky'

interface GlobalResponse {
  success: boolean;
  time?: string;
  message: string;
  code: string;
}

export const request = ky.create({
  hooks: {
    beforeRequest: [
      options => {
        // 拦截请求并修改请求选项
        options.headers.set('Authorization', 'your token');
      }
    ],
    afterResponse: [
      (request, options, response) => {
        console.log(response, 'response')
        // 拦截并检查 response
        if (!response.ok) {
          console.error(`Error with response from ${request.url}`);
        }
        return response; // 确保将 response 返回，以便后续处理
      }
    ]
  }
});