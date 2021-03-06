import { createGlobalStyle } from "styled-components";
export const IconFont = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2945539 */
  src: url('./iconfont.eot?t=1637319209928'); /* IE9 */
  src: url('./iconfont.eot?t=1637319209928#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAlkAAsAAAAAEaQAAAkUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACFGgqSaI9WATYCJANECyQABCAFhGcHgWIbKg9RlFBWL9kX2DbsaeNkYd017vDsMP0FBAxoWAAAAD5gARMiBkFB+/1mT/Qj7llDI5FopKKdSqo0jVrSl5Le/OOm/YTOktaxQlXumppDhZpGujl0UJu3Ew9TRiZasxmyexN1LsBMZH97revW0FURplPW3phq+hQCnz5IeCFd3h0P7673119MkSRRJFnKAccntx1cnw/I/P9rv1ZvhzFfQlUJjZp2z9/fPVlU5CfEE5kEFxKinn4m0RlKYQgtEFIHAmzTXujEI5gFs/pr5TEIFIdSwe3586d3O9G4N2ZDzheSppopYu/8LZ6r8ZZkDm0PTbTxMMt8g+fg6/U6jgSGL8izXI0n3/t/Ajrbu2vuwF6eZrweYnMDPLBgd2WJOvXpX8BGsBuwYmvrvIBpjoUf9WjHti8/TexkGExOTaOb3vY32BHt0DEQuZBMK+SGfP6JB+g3yEEfMSzHC6IkK6oWVIG1HPv/ikGgDUwq/W6FFo2NXyYUA+gkhqIPnQyB4IMRGLgcgYXTCBxcjcDDNQgCvANBhHciSPAuBBnejaDA9QgqfDu6E7Ebil/2YDY0H+xPuj1hekCZCZBBQR2xZHmqq1NjwgFzbjHGslLGJtz7+NCXbwKPJ+Db2AhcHaViaQK7/v15aD0pUY5MrWP2/gdAmYMAW9JgwQRGazAPUm/eH6HVAUM2ruNyV7fwCMIOQtjNQDJmM6DZIAhSWywsG7kDgwVSW62DocqR3pSazPB2HnXDUWa9voVbsVrHteVslBgzNmObkbb9I2GEU2cmzDhXYPQUD6IUfqTggjbvXOoxstezC2uTbBZbh8thxQYDVA/TOr8RnEHyNbwRirbAyo11G3e6EsQafUszF/d3b9at45P46g0bWgUU2djaZjzsRTXhOIFTBEmRZB1DTJFC46zy0pIWLzVlbUvgZDKBABQYKwohIQhq8oCrAWgdl8BxcjWfXJJqbD01OlzLJmaIlEjLqMTF70ANwwFBQSRz8Sh95IL20jH18ctp2gP0Qeaw+tBUkjYr0VaJQVKTQaTgc/siAKkFoaSEmH7uSw19ALHdzloQhGgPQRz1YVTZ6LyULbCr4wWHGq2MOfigmU0eqTpksUrSRqW7iSXEsE+7JyiopCisrWPNwfLKqqt0VgTR6gC0HkUZI9Go5eKraV7KGuZ0MtX8qsCUagMFKBkIkEROmR2pGAegceUqRWyqdes3BsZtFHg1c5s3cW/ULdYFrTtzhg3YFUu1ia0UZc04UnKExf/Bj+Bs0GaNopoEjV3brdIru4Ot41WP8DdbHy6Vdi/abEYZaxIPEOUKrcXymNH779w0yzogpC2O1KEDBzV6IO3CCvl+lAFndL8jiPYSpKYoNaJNJnbo1mRljlOrZPazZxf5UpmL4HWt+Fy7aP9GES7+fmhW3Yv+pXT0odK+3159Hrff6LKPsp83uWaPyejMpOiHlxbl+X9/+rPkT3Q8nChPiJcnhnoVvW4GW0GyrIASkBnin91v5W3votDEBLk8AVjk0lvg3r1bYWEYdvH+fSBj7Y+LPCYENXfaG2JnhpWHSFa/27j8lOrvyarWcsjkncZdI10D3h4qiwLzArL65fXL2H10ijJzfVGwdJBpy/SmM7OOD5A1bF6geer+9ETKcGBwT1jAuEzjS1z0SpWLhD9gohap4E57zGQ0Fi1bHhgp2AZ6JkEePXDHcfFVqSZv0fLF3sfcm6W9O7YN3Tx4Z/ewPW7ep5YsaqmpiTCdcqO2jon6cdpt2WLvk9uGKOIRQTK7VewAzQtXHlGKYaUR5ac08ZcuxcojThVSd+nLpfGCU1IvpWNok09KSTq6TX15OfB8zU5/auf0xcn2WsE8xmuwqnjRA7aYCdZa7FWsOXPO4YuT3dPaXXxYm5R8J1Nyv/QpsgEmUXIXZqd90Wq3nY1vjyhL1JP1ko+JM2PVUKxrVYWkVBaUHhiYHiTr1cQnMUnL935MAa5ZObWcBURuM4oIkVGMiwpXDN8w2K6IfFDUv6eS8bZIt0w9HCINAQ/HqjL2GbM9inVLI+GqFKpkkaHKKAtIwomyM0g4NfaZzuka508xn3x8yu0n+4QtnVucMh1lU/v8VS1BojwZdUKv2xoaWG2vs5ZfwRShprlFI9BoDiu3NGuEC3m8vKoxUzP/SIaWRRFOaVko1EhTQR/S5tryiTLyhhUr/roj0ZJEXYdVz+cBqyZOImtjWBOe2Ny+2XR3ou8IR0z+r0NuGvjfT4wVPPk1KQzNK1gQKEs57rmhZk1MRevw7qFBGZyxg0TFC/zL8n0zpa6htdnTB06pHj+mYnRcFOQwmj9DrGZBo7/X/iveVHi2bPJk2TJNfGlZdIocjPL2OOB15syBvWciyzCsrFJ4lYVXGsMhfIAyDBxRZV8NyryqtP+reLDUphaRcLqiJtVq8zO1vuFkPAb1SQsbG0zW2A1F86WJj4ZRDeddeT9F/u/9PcDsv3fIDeFNcBMAAE4c/DLAEfA2XAFb8AD4MSY5EG6Ab5nq2s7PgL9mcR1slCaIIH832uucgeW0VXLUAsvh+0lHOLvczcDNm6M3DXdI/twffRpedPugPNM7+c2do19mYv7hGTtYftNS1v0UwFDahs9oRkwfQu/HGfNCUWNgz5o97I4wjbTW7tdNI4mfEc2Atdkvg8N+28+rjiFgf+pX7JAdXY0YZ0iZgXVz8ZNBej+j3ytY7E+Dw97q5417CgH7337FddycrlqP2wclNPKwPkJywkGbLbD1i+I2o5aV/JG2RBEswsLzVS/EpEPs0XZxaRYgqBR4frka5SxQVTbkbNqZ1dUMU9n2mDopvQeKIPOCekDhGLOGI1iQt+z3+0KirQxpS/SXqpqjFraDCGHCW6AXxq36XEnrejvRUoNIDcCAisoCZL0RIL+WCzDOXrpB3Hf6VHWP0moFU3Kqtmw6v6nc8Yz7rl958FAYWTl5BUUl5eem+7XUp34NaFBDGgbtqrKfaIqdXUi9ImVJ+PIrqyk/4CKK+ElIOZ93YiGcXRcnvy29dJLz9aGN29w74bYtNdHUL3+yVmR/VQY3V628EFure5+LgDvRZNTOWk3MpGdH4XhEPsG0XCTAl9jrAQAAAA==') format('woff2'),
       url('./iconfont.woff?t=1637319209928') format('woff'),
       url('./iconfont.ttf?t=1637319209928') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
