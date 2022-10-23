// export class QuizzData {
//   ques: string;
//   choose: string[];
//   ans: number;
// }

// export const quizzData: { [key: number]: QuizzData[] } = {
//   1: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị bỏng?',
//       choose: [
//         'Đỏ da, xuất hiện bóng nước, da bị cháy đen.',
//         'Có vết bỏng, khó thở, rối loạn nhịp tim.',
//         'Khó thở, tức ngực, đau khi nuốt. ',
//       ],
//       ans: 0,
//     },
//     {
//       ques: 'Câu hỏi 2: Bước sơ cứu đầu tiên khi bị bỏng là gì?',
//       choose: [
//         'Tách nạn nhân khỏi tiếp xúc nguồn điện.',
//         'Sử dụng nước lạnh, nước mát (không dùng nước đá) để làm mát vết bỏng ít nhất 15 phút cho đến khi không còn đau.',
//         'Ấn ngực, ép tim ',
//       ],
//       ans: 1,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị bỏng?',
//       choose: [
//         'Quên ngắt nguồn điện.',
//         'Dùng nước đá làm mát vết bỏng.',
//         'Lấy ngón tay móc dị vật. ',
//       ],
//       ans: 1,
//     },
//   ],
//   2: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị điện giật?',
//       choose: [
//         'Đỏ da, xuất hiện bóng nước, da bị cháy đen.',
//         'Có vết bỏng, khó thở, rối loạn nhịp tim.',
//         'Khó thở, tức ngực, đau khi nuốt. ',
//       ],
//       ans: 1,
//     },
//     {
//       ques: 'Bước sơ cứu đầu tiên khi bị điện giật là gì?',
//       choose: [
//         'Tách nạn nhân khỏi tiếp xúc nguồn điện.',
//         'Sử dụng nước lạnh, nước mát (không dùng nước đá) để làm mát vết bỏng ít nhất 15 phút cho đến khi không còn đau.',
//         'Ấn ngực, ép tim ',
//       ],
//       ans: 0,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị điện giật?',
//       choose: [
//         'Quên ngắt nguồn điện.',
//         'Dùng nước đá làm mát vết bỏng.',
//         'Lấy ngón tay móc dị vật. ',
//       ],
//       ans: 0,
//     },
//   ],
//   3: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị hóc dị vật?',
//       choose: [
//         'Đỏ da, xuất hiện bóng nước, da bị cháy đen.',
//         'Có vết bỏng, khó thở, rối loạn nhịp tim.',
//         'Khó thở, tức ngực, đau khi nuốt. ',
//       ],
//       ans: 2,
//     },
//     {
//       ques: 'Câu hỏi 2: Bước sơ cứu đầu tiên khi bị hóc dị vật là gì?',
//       choose: [
//         'Tách nạn nhân khỏi tiếp xúc nguồn điện.',
//         'Sử dụng nước lạnh, nước mát (không dùng nước đá) để làm mát vết bỏng ít nhất 15 phút cho đến khi không còn đau.',
//         'Kiểm tra xem họ có nói/ thở được không.',
//       ],
//       ans: 2,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị sơ cứu cho người hóc dị vật?',
//       choose: [
//         'Quên ngắt nguồn điện.',
//         'Dùng nước đá làm mát vết bỏng.',
//         'Lấy ngón tay móc dị vật. ',
//       ],
//       ans: 2,
//     },
//   ],
//   4: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị say nắng?',
//       choose: [
//         'Tăng thân nhiệt, nhịp tim, mệt mỏi, hoa mắt chóng mặt, nhức đầu.',
//         'Sặc nước, mặt đỏ hoặc tím, tình trạng cơ thể không bình thường.',
//         'Hôn mê, mất ý thức, bỗng dưng không nói được.',
//       ],
//       ans: 0,
//     },
//     {
//       ques: 'Câu hỏi 2: Bước sơ cứu đầu tiên khi bị say nắng là gì?',
//       choose: [
//         'Tiến hành giảm thân nhiệt cho nạn nhân.',
//         'Hô to gọi trợ giúp và nhanh chóng đưa nạn nhân lên bờ.',
//         'Để phần đầu và lưng của bệnh nhân nằm nghiêng.',
//       ],
//       ans: 0,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị bỏng?',
//       choose: [
//         'Bơi đi cứu người ngay mà không suy nghĩ.',
//         'Cho nạn nhân uống aspirin/ acetaminophen.',
//         'Cho người bệnh ăn uống, dùng thuốc hạ huyết áp.',
//       ],
//       ans: 1,
//     },
//   ],
//   5: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị đuối nước?',
//       choose: [
//         'Tăng thân nhiệt, nhịp tim, mệt mỏi, hoa mắt chóng mặt, nhức đầu.',
//         'Sặc nước, mặt đỏ hoặc tím, tình trạng cơ thể không bình thường.',
//         'Hôn mê, mất ý thức, bỗng dưng không nói được.',
//       ],
//       ans: 1,
//     },
//     {
//       ques: 'Câu hỏi 2: Bước sơ cứu đầu tiên khi bị đuối nước là gì?',
//       choose: [
//         'Tiến hành giảm thân nhiệt cho nạn nhân.',
//         'Hô to gọi trợ giúp và nhanh chóng đưa nạn nhân lên bờ.',
//         'Để phần đầu và lưng của bệnh nhân nằm nghiêng.',
//       ],
//       ans: 1,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị sơ cứu cho người đuối nước?',
//       choose: [
//         'Bơi đi cứu người ngay mà không suy nghĩ.',
//         'Cho nạn nhân uống aspirin/ acetaminophen.',
//         'Cho người bệnh ăn uống, dùng thuốc hạ huyết áp.',
//       ],
//       ans: 0,
//     },
//   ],
//   6: [
//     {
//       ques: 'Câu hỏi 1: Đâu là dấu hiệu bị đột quỵ?',
//       choose: [
//         'Tăng thân nhiệt, nhịp tim, mệt mỏi, hoa mắt chóng mặt, nhức đầu.',
//         'Sặc nước, mặt đỏ hoặc tím, tình trạng cơ thể không bình thường.',
//         'Hôn mê, mất ý thức, bỗng dưng không nói được.',
//       ],
//       ans: 2,
//     },
//     {
//       ques: 'Câu hỏi 2: Bước sơ cứu đầu tiên khi bị đột quỵ là gì?',
//       choose: [
//         'Tiến hành giảm thân nhiệt cho nạn nhân.',
//         'Hô to gọi trợ giúp và nhanh chóng đưa nạn nhân lên bờ.',
//         'Để phần đầu và lưng của bệnh nhân nằm nghiêng.',
//       ],
//       ans: 2,
//     },
//     {
//       ques: 'Câu hỏi 3: Tránh làm gì khi bị bỏng?',
//       choose: [
//         'Bơi đi cứu người ngay mà không suy nghĩ.',
//         'Cho nạn nhân uống aspirin/ acetaminophen.',
//         'Cho người bệnh ăn uống, dùng thuốc hạ huyết áp.',
//       ],
//       ans: 2,
//     },
//   ],
// };
