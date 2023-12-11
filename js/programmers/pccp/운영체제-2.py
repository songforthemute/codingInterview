import heapq

def solution(program):
    answer = [0] * 11
    program.sort(key = lambda x : x[1])
    heap = []
    current = 0
    
    def call_program():
        while len(program) > 0 and program[0][1] <= current:
            heapq.heappush(heap, program.pop(0))

    while len(program) > 0 or not len(heap) == 0:
        if len(heap) == 0:
            current = program[0][1]
            call_program()

        execute = heapq.heappop(heap)
        answer[execute[0]] += (current - execute[1])
        current += execute[2]
        call_program()
    
    answer[0] += current
    
    return answer